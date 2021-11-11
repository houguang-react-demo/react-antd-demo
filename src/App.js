import {Button, DatePicker} from "antd";
import {HomeOutlined, SearchOutlined} from "@ant-design/icons"

import './App.less';

function App() {
    function onchange(date,dateString){
        console.log(date,dateString)
    }
    const { RangePicker } = DatePicker;
  return (
    <div>
        <HomeOutlined/>
        <Button type="primary" icon={<SearchOutlined/>}>按钮</Button>
        <DatePicker onChange={onchange}/>
        <RangePicker />
    </div>
  );
}

export default App;
