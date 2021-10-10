import "./app.css";

const VerticalBar = () => {
  return (
    <div className="super">
      <div className="Mycontainer">
       
          <div className="container-fluid">
            <img src="ani.JPG" alt="loading.." />
          </div>
      

       
          <div className="container-fluid stu">
            <span className="material-icons-outlined profile">person</span>
            <p>Student</p>
          </div>
    

 
          <div className="container-fluid bk ">
            <span className="material-icons-outlined book">book</span>
            Lesson Plans
          </div>


          <div className="container-fluid st">
            <span className="material-icons-outlined setting">settings</span>
            Settings
          </div>
      
      </div>

      <div className="container2">
        <div className="vd">
          <span className="material-icons-outlined">play_arrow</span>
          <p>Videos</p>
        </div>
        <div className="input-group  ip">
          <input
            type="text"
            class="form-control"
            placeholder="Insert URL here"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <p>or</p>
        <div className="upload">
          <p>Upload</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
