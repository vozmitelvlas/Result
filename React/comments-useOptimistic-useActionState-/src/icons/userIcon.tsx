interface UserIconProps {
    className?: string,
    size?: string,
    color?: string,
}


export const UserIcon = ({ className = '', size = "24px", color = 'currentColor' }: UserIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1"
            className={className}>
            <circle cx="12" cy="7" r="4" />
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        </svg>
    );
};