const ProgressBar = ({ number }) => {
    const styles = {
      progressBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '500px',
        height: '22px',
        border: '1px solid #051923',
        borderRadius: '10px',
        overflow: 'hidden'
      },
      left: {
        padding: '2px',
        width: `${number}%`,
        height: '100%',
        backgroundColor: '#4caf50', //left hand color
        transition: 'width 0.5s ease-in-out',
        color: 'black'
      },
      right: {
        width: `${100 - number}%`,
        height: '100%',
        backgroundColor: 'red', //right hand color
        transition: 'width 0.5s ease-in-out'
      }
    }
  
    return (
      <div style={styles.progressBar}>
        <div style={styles.left}>{number}</div>
        <div style={styles.right}></div>
      </div>
    )
  };
  
  export default ProgressBar;