export function Pre(condition: (...args: any[]) => boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const context = this;

      if (!condition(args)) {
        // TODO: better error message
        throw new Error(`Precondition doesn't hold for ${target} ${propertyKey} ${descriptor}`);
      }

      return originalMethod.apply(context, args);
    };
  };
}
