interface AddPlayerButtonProps {
    onClick: () => void;
}

export function AddPlayerButton({onClick}: AddPlayerButtonProps) {
    return (
        <div
            onClick={onClick}
            className={"flex items-center justify-center hover:glow hover:bg-highlights transition-all duration-200 w-8 aspect-square rounded-full bg-customGray cursor-pointer "}>
            +
        </div>
    );
}
