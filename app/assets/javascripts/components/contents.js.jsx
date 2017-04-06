class Contents extends React.Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }
  submitForm (e) {
    e.preventDefault()
    $form = $(e.target)
    var formData = $form.serialize()

    var project_type = this.refs.project_type.value
    var body = this.refs.body.value
    var image = this.refs.image.value
    var description = this.refs.description.value
    var form = $('#new_content')[0];
    var data = new FormData(form);

    $.ajax({
      url: this.props.update ? `/contents/${this.props.content.id}` : '/contents',
      type: this.props.update ? 'PUT' : 'POST',
      enctype: 'multipart/form-data',
      processData: false,  // Important!
      contentType: false,
      cache: false,
      // data: {content: {project_type: project_type, body: body, image: image, accepted: accepted, description: description }},
      data: data,
      success: (response) => {
        console.log('it worked!', response)
      }
    })
  }

  render () {
    return (

      <div className="container">
        <form className='new_content' id='new_content' action='/contents' encType='multipart/form-data' method='post' onSubmit={this.submitForm}>
        <h1>New Content</h1>
          <input type='hidden' name='authenticity_token' value='TB2ZMr8mXdCwaGU89iSpaMdwgJZpiyCyqrHnTMP2Dvla/xdjltXy/buJ6IGB9c7bxBAB+wroyXJguUKTtU8wIA==' />
          <div className='field'>
            <label htmlFor='content_project_type'>Project Type</label>
            <select name='content[project_type]'ref='project_type' id='content_project_type_'>
            <option selected='selected' value='Recipes'>Recipes</option>
              <option value='Life Hacks'>Life Hacks</option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor='content_description'>Description</label>
            <input type='text' ref='description' name='content[description]' id='content_description' />
          </div>

          <div className='field'>
            <label htmlFor='content_body'>Body</label>
            <textarea type='text' ref='body' name='content[body]' id='content_body' />
          </div>

          <div className='field'>
            <label htmlFor='content_image'>Image</label>
            <input type='file' ref='image' name='content[image]' id='content_image' />
          </div>

          <div className='actions'>
            <input className="btn-1" type='submit' name='commit' value={this.props.button_text} data-disable-with='Create Content' />
          </div>
        </form>
      </div>
    )
  }
}
