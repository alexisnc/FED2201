import React from "react";
import axios from "axios";
import EditShow from "./EditShow";

const api = axios.create({
  baseURL: "https://fed2201-4510b-default-rtdb.firebaseio.com/tv-shows/",
});

class Ajax extends React.Component {
  constructor() {
    super();
    this.state = {
      tvShows: [],
    };

    this.getTvShows();
  }

  // GET Request
  getTvShows = async () => {
    let listOfTvShows = [];

    await api.get("/.json").then((res) => {
      console.log(res.data);
      //iterate through the data received and set our state
      for (let show in res.data) {
        listOfTvShows.push({
          id: show,
          title: res.data[show].title,
          genre: res.data[show].genre,
        });
      }
    });
    console.log(`listOfTvShows is...`);
    console.dir(listOfTvShows);

    this.setState({ tvShows: listOfTvShows });
  };

  // POST Request
  createTvShow = async () => {
      await api.post('/.json', {title: "new show", genre: "n/a"}).then(res => console.log(res))
      this.getTvShows()
    }
    
    // DELETE Request 
    deleteTvShow = async (id) => {
        await api.delete(`/${id}.json`).then(res => console.log(`show deleted...`))
        this.getTvShows()
  }

  clickTitle = (str) => {
      console.log(`${str} was clicked!!!`)
  }

  // Update Request
  updateTvShow = async (id, newVal) => {
      await api.patch(`/${id}.json`, {title: newVal}).then(res => console.log(`show ${id}updated...`))
      this.getTvShows()
  }

  render() {
    return (
      <div >
        <h2>Axios and AJAX</h2>
        <button onClick={this.createTvShow}>Add New Show</button>

        {
          <ul>
            {this.state.tvShows.map((show, index) => (
              <li className="content-block" key={show.id}>
                <h4 onClick={(e) => this.deleteTvShow(show.id)}>{show.title}</h4>

                <EditShow title={show.title}/>

                {/* <button onClick={(e) => this.updateTvShow(show.id, `${show.title} *`)}>Update Show</button> */}
              </li>
            ))}
          </ul>
        }

      </div>
    );
  }
}

export default Ajax;
