import { makeStyles } from '@material-ui/core/styles'

const HeaderStyles = makeStyles({
    grid: {
        alignItems: "center",
        justify: "center",
        margin: "auto",
        marginBottom: 30,
        maxWidth: 1000,
        height: 100,
        background: "#1DB954",
    },
    icon: {
        borderRadius: 25,
        padding: 10,
        border: "3px solid #FFFFFF"
    },
});

const FooterStyles = makeStyles({
    grid: {
        alignItems: "center",
        justify: "center",
        margin: "auto",
        marginTop: 20,
        maxWidth: 1000,
        height: 100,
        background: "#1DB954",
    },
    icon: {
        padding: 30,
    },
})

export { HeaderStyles, FooterStyles };