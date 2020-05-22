declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type Index = <T>(input: T[], comparator: Comparator<T>) => number;
    type Element = <T>(input: T[], comparator: Comparator<T>) => T;
    type Val = <T>(input: T[], getValue: (value: T) => number) => number;
    
    export const getMaxIndex: Index;
    export const getMaxElement: Element;
    export const getMinIndex: Index;
    export const getMinElement: Element;
    export const getMedianIndex: Index;
    export const getMedianElement: Element;
    export const getAverageValue: Val;

    
}
