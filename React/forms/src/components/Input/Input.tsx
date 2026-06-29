import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Текст лейбла над инпутом */
    label?: string,
    /** Показывать красную звездочку (для обязательных полей) */
    withAsterisk?: boolean,
    /** Текст ошибки (показывается красным под инпутом) */
    error?: string,
    /** Описание/подсказка под лейблом */
    description?: string,
    /**Добавляет иконку в инпут */
    icon?: React.ReactNode,
}
export const Input = ({ label, withAsterisk, error, description, icon, ...props }: InputProps) => {
    const { className, ...otherProps } = props;

    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={props?.id ? props.id : ''}>
                    {label}
                    {withAsterisk && (<span className="text-red-600">*</span>)}
                </label>
            )}
            {description && <div className="text-xs text-gray-400">{description}</div>}

            <div className="relative">
                {icon && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type="text"
                    className={`${error ? 'border border-red-600 text-red-600 outline-none'
                        : 'outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300'} 
                    ${icon ? 'pl-8' : 'pl-3'}
                    w-full rounded-md pl-2 border border-gray-400 ${className}`}
                    {...otherProps}
                />
            </div>

            {error && (<span className="text-xs text-red-600">{error}</span>)}
        </div>
    );
};