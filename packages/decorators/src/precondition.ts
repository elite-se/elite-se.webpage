export function Pre(condition: (...args: any[]) => boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const context = this;

      if (!condition(args)) {
        console.trace(`Precondition violiation in ${target.constructor.name}.${propertyKey}(${args}):`);
        throw new Error(`Precondition doesn't hold for ${target.constructor.name}.${propertyKey}(${args})`);
      }

      return originalMethod.apply(context, args);
    };
  };
}
