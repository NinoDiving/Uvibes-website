import { BottomNavigation } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	position: "fixed",
	bottom: 0,
	left: "50%",
	transform: "translateX(-50%)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "2rem",
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[4],
	marginBottom: "var(--spacing-ref)",
	borderRadius: "calc(var(--border-radius)*2.5)",
	padding: "var(--spacing-ref)",

	[theme.breakpoints.down(768)]: {
		display: "none",
	},
}));
