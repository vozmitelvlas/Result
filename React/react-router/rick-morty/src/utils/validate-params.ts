import {validateParam} from "./validate-param.ts";

type ValidationRules = Record<string, readonly string[]>

export const validateParams = <T>(
    rawParams: Record<string, string | undefined>,
    rules: ValidationRules,
    defaults: T,
): { params: T; hasInvalid: boolean } => {
    let hasInvalid = false;
    const result = {...defaults};

    for (const defParam of Object.keys(defaults as Record<string, string>)) {
        if (!(defParam in rawParams)) {
            hasInvalid = true;
        }
    }

    for (const param of Object.keys(rawParams)) {
        const rawValue = rawParams[param];

        if (!(param in rules)) {
            hasInvalid = true;
            continue;
        }

        const validated = validateParam(rawValue, rules[param]);
        if (validated !== undefined) {
            result[param as keyof T] = validated as T[keyof T];
        } else {
            hasInvalid = true;
        }
    }

    return {params: result as T, hasInvalid};
};