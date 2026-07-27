export const validateParam = <T>(
    value: string | undefined | null,
    validValues: readonly T[]
): T | undefined => {
    if (value && validValues.includes(value as T)) {
        return value as T;
    }
    return undefined;
};