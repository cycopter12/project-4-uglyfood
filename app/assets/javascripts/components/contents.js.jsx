class Contents extends React.Component {
  render () {
    return (
      <p id='notice'>
        <h1>New Contents</h1>
      </p>,
        <form className='new_content' id='new_content' action='/contents' acceptCharset='UTF-8' method='post'>
          <div>
            <label htmlFor='content_project_type'>Project type</label>
            <input type='text' name='content[project_type]' id='content_project_type' />
          </div>
        </form>,

        <div className='actions'>
          <input type='submit' name='commit' value='Create Content' data-disable-with='Create Content' />
        </div>
    )
  }
}
