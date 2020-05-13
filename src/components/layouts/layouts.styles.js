import { makeStyles } from '@material-ui/core/styles'

const HeaderStyles = makeStyles({
    grid: {
        alignItems: "center",
        alignContent: "center",
        // textAlign: "center",
        margin: "auto",
        maxWidth: 1000
    },

    title: {
        alignItems: "center",
        margin: 10,
        maxWidth: 1000,
    }
});

export { HeaderStyles };