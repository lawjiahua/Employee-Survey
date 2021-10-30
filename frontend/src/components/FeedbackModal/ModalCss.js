import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    modalContainer: {
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        height: 400,
        width: 700,
        background: '#FFFFFF',
        padding: '10px 20px',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
    },
    formContentBox: {
        height: '360px',
    },
    formArea: {},
    formHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    exitButton: {
        background: '#B489C9',
        color: '#FFFFFF',
        borderRadius: '30px',
        padding: '0px 15px',
        height: '40px',
        "&:hover": {
            color: "#000000"
          }
    },
    formTitle: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        marginBottom: '15px',
    },
    pageDisplay: {
        color: '#B3B2B2',
    },
    actionBar: {
        display: 'flex',
        padding: '0px 20px',
        width: '95%',
        justifyContent: 'space-between',
    },
    questionText: {
        color: '#3F0F40',
    },
    textInput: {
        height: '200px',
    },
    questionArea: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        gap: '20px'
    }
}))