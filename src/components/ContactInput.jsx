import React from 'react';
 
class ContactInput extends React.Component {

  constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
      maxChars: 50,
    }
  
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onNameChangeEventHandler(event) {
    const value = event.target.value.slice(0, this.state.maxChars); // Mengambil maksimal karakter
    this.setState({ name: value });
  }
  
  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    const charsRemaining = this.state.maxChars - this.state.name.length;

    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} maxLength={this.state.maxChars} />
        <div style={{ fontSize: '12px', color: charsRemaining < 0 ? 'red' : 'inherit' }}>
          {charsRemaining} karakter tersisa
        </div>
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    )
  }
}
 
export default ContactInput;