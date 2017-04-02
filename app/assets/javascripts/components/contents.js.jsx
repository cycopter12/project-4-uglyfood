class Contents extends React.Component {

//   submitForm: function (e) {
//   e.target.preventDefault()
//   console.log(this.state)
//   $.post({ url: '/orders',
//     data: { order: this.state },
//     success: (response) => {
//       console.log('it worked!')
//     } })
// },
  render () {
    return (
<<<<<<< HEAD:app/assets/javascripts/components/contents.js.jsx

      <p id='notice'>
        <h1>New Contents</h1>
      </p>,
        <form className='new_content' id='new_content' action='/contents' acceptCharset='UTF-8' method='post'>
          <div>
            <label htmlFor='content_project_type'>Project type</label>
            <input type='text' name='content[project_type]' id='content_project_type' />
          </div>
        </form>,
=======
      <div>
        <p id='notice'>
          <h1>New Contents</h1>
        </p>
        <form className='new_content' id='new_content' action='/contents' acceptCharset='UTF-8' method='post'>
          <input type='hidden' name='authenticity_token' value='TB2ZMr8mXdCwaGU89iSpaMdwgJZpiyCyqrHnTMP2Dvla/xdjltXy/buJ6IGB9c7bxBAB+wroyXJguUKTtU8wIA==' />
          <div className='field'>
            <label htmlFor='content_project_type'>Project Type</label>
            <select name='content[project_type]'ref='project_type' id='content_project_type_'><option selected='selected' value='Cooking'>Cooking</option>
              <option value='Life Hacks'>Life Hacks</option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor='content_description'>Description</label>
            <input type='text' ref='description' name='content[description]' id='content_description' />
          </div>

          <div className='field'>
            <label htmlFor='content_body'>Body</label>
            <input type='text' ref='body' name='content[body]' id='content_body' />
          </div>

          <div className='field'>
            <label htmlFor='content_image'>Image</label>
            <input type='file' name='content[image]' id='content_image' />
          </div>

          <div className='field'>
            <label htmlFor='content_accepted'>Accepted</label>
            <input name='content[accepted]' type='hidden' value='0' /><input type='checkbox' value='1' name='content[accepted]' id='content_accepted' />
          </div>

          <div className='actions'>
            <input type='submit' name='commit' value='Create Content' data-disable-with='Create Content' onClick={this.submitForm} />
          </div>
        </form>

      </div>
>>>>>>> feature/content-third:app/assets/javascripts/components/contents.es6.jsx

    )
  }
}
