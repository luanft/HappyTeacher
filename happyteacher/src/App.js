import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';


import './App.css';

function App() {
  return (
    <div className="App">
      
      <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          backgroundColor: '#C5E898', padding:'10px', margin: '0px'
        }}>
        <h3 style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          color: '#0766AD',
          flex: 2,
          fontSize: '18px'
        }}>
          <SentimentVerySatisfiedOutlinedIcon style={{ marginRight: '2px' }}/> Ông giáo vui vẻ
          <SentimentVerySatisfiedOutlinedIcon style={{ marginLeft: '2px' }}/>
        </h3>
        <FormGroup color="white" style={{ display: 'inline-block', flex: 1 }}>
          <FormControlLabel control={<Switch color="primary" defaultChecked />} label="On" />
        </FormGroup>
      </div>
      <div>
        <img style={{ display: 'block', margin: "auto", backgroundColor: "transparent", float: 'left'}}
          width={"240px"} height={"250px"} alt='Ông giáo vui vẻ'
          src='teacher_logo_transparent.png' />
        <div style={{ display: 'block', float: 'left', width: '160px', textAlign: 'left', paddingTop: '20px', fontSize: '16px' }}>
          <p><strong>Đã phạt: </strong>0 roi</p>
          <p>Thầy rất buồn về tình hình giới trẻ hiện nay (-_-)</p>
        </div>
      </div>
      <div style={{ clear: 'both', height: '0px', width: '100%' }} ></div>

      <div style={{ width: '100px', padding: '8px', fontSize: '16px', marginTop: '10px' }}>
        <div>
          <div><label style={{ paddingLeft: '0px', fontSize: '18px' }}>Chế độ lọc: </label></div>
          <div>
            <select style={{ fontSize: '16px' }}>
              <option>Hài hước</option>
              <option>Thay thế bằng ***</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
