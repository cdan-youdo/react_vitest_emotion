const StyledDiv = () => {
  return (
    <div css={
      theme => ({
        border: `6px solid ${theme.palette.secondary.main}`,
        height: '50%',
        width: '50%',
      })
    } data-testid="styled-div">
    </div>
  )
}

export default StyledDiv