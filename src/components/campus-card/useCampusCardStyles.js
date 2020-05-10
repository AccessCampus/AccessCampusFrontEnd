import { makeStyles } from '@material-ui/core/styles'

const useCampusCardStyles = makeStyles({
    root: {
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        width: 345,
        height: 345,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 20,
        marginBottom: 20,
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
        }
    },
    media: {
        objectFit: "cover",
        flexShrink: 0,
        width: "100%",
        height: "78%",
        margin: "auto",
    },
    content: {
        paddingBottom: 16,
    },
    button: props => ({
        textTransform: "none",
        "&:hover": {
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
            backgroundColor: props.backgroundColor,
            color: "white",
        },
        fontWeight: "bold",
    })
});

export default useCampusCardStyles;