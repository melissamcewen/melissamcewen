import React from "react";
import data from '../data/data.json';
import catto from './images/catto.gif'; 

function custom_sort(a, b) {

   return new Date(b.Date) - new Date(a.Date);
}
data.sort(custom_sort);


function filterItems(data, query) {
  return data.filter(function(item) {
        var test= item.Tags;
  if (test) {
    return test.includes(query);
  }
  })
}

class writing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clips: data
  } 

      this.sortList = this.sortList.bind(this);

  };

  sortList(query) {
    this.setState({clips: filterItems(data, query)});

  
  }

  resetList(query) {
    console.log(this.props.meow);

      this.setState({clips: data});

  
  }




 render() {
    return (
      <div>
        <p>The following is all the writing I've done that's been through an editorial process. I also self-publish on <a href="https://medium.com/@melissamcewen/">Medium</a> and have blogged at various site for over 15 years.     <img src={catto} alt="catto" />
</p>

        <button  onClick={() => this.sortList("tech")} >
          tech
        </button>

        <button  onClick={() => this.sortList("food")} >
          food
        </button>

        <button  onClick={() => this.sortList("data")} >
          data
        </button>

        <button  onClick={() => this.sortList("science")} >
          science
        </button>

        <button  onClick={() => this.resetList()} >
          all
        </button>
        <ul>
        {
          this.state.clips.map(function(clip){
            return <li><a href={clip.Url}> {clip.Name} </a> - {clip.Type} @ {clip.Publication}</li>;
          })
        }
        </ul>      </div>
    );
  }

}

export default writing;

