class Contents extends React.Component {
  render () {
    return (
      <div>
        <p id='notice'>
          <h1>New Contents</h1>
        </p>
        <form className='new_content' id='new_content' action='/contents' acceptCharset='UTF-8' method='post'>

          <div className='field'>
            <label htmlFor='content_project_type'>Project type</label>
            <input type='text' ref='project_type' name='content[project_type]' id='content_project_type' />
          </div>

          <div className="field">
            <label htmlFor="content_body">Body</label>
            <input type="text" ref='body' name="content[body]" id="content_body" />
          </div>

          <div className='actions'>
            <input type='submit' name='commit' value='Create Content' data-disable-with='Create Content' />
          </div>
        </form>

      </div>

    )
  }
}
