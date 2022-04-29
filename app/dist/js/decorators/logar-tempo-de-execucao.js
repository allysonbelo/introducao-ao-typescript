export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodooriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodooriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} executado em ${(t2 - t1) / 100} sg`);
            retorno;
        };
        return descriptor;
    };
}
