export function logarTempoDeExecucao() {
   return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
   ){
       const metodooriginal = descriptor.value;
       descriptor.value = function(...args: any[]) {
           const t1 = performance.now();
           const retorno = metodooriginal.apply(this, args);
           const t2 = performance.now();
           console.log(`${propertyKey} executado em ${(t2 - t1)/100} sg`);
           retorno
       }
       return descriptor;
   };
}
