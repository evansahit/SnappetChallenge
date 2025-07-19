interface LoadingSpinnerProps {
    className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
    return (
        <div
            className={`h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin ${className}`}
        ></div>
    );
}
