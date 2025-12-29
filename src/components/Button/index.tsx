"use client";

interface ButtonProps {
	text: string;
	variant: "primary" | "secondary";
	onPress: () => void;
	disabled?: boolean;
}

const Button = ({ text, variant, onPress, disabled }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			className={`btn btn-${variant}`}
			onClick={onPress}
		>
			{text}
		</button>
	);
};

export default Button;
