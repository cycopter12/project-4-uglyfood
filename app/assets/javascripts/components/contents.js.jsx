class ContentShow extends React.Component {

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

      <div>
        <h3> Product Type:{this.props.content.product_type} </h3>
        <p> Description: {this.props.content.description}</p>
        <p> Body: {this.props.content.body} </p>
        <p> Image: <img src={this.props.image}/> </p>


      </div>

    )
  }
}

class Contents extends React.Component {

  submitForm(e) {
  e.target.preventDefault()
  console.log(this.state)
  $.post({ url: '/orders',
    data: { order: this.state },
    success: (response) => {
      console.log('it worked!')
    } })
}
  render () {
    return (

      <div>
        <p id='notice'>
          <h1>New Content</h1>
        </p>
        <form className='new_content' id='new_content' action='/contents' encType="multipart/form-data" method='post'>
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
            <textarea type='text' ref='body' name='content[body]' id='content_body' ></textarea>
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
            <input type='submit' name='commit' value={this.props.button_text} data-disable-with='Create Content' onClick={this.submitForm} />
          </div>
        </form>

      </div>

    )
  }
}
