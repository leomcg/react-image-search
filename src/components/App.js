import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: res.data.results })
    
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} guessWhoIam="Im the props object"/>
        <h3>{this.state.images.length}</h3>
      </div>
    )
  }
}

export default App;

