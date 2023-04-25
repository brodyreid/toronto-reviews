export const repeater = <T,>(component: T, times: number) => { 
    return [...Array(times)].map((_) => component);
};