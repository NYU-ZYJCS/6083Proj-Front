import logo from './logo.svg';
import './App.css';
import {Button, ColorPicker, ConfigProvider, Divider, Input, Space} from "antd";
import {Route, Routes} from "react-router-dom";
import SetOrder from "./components/SetOrder/SetOrder";
import React from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [primary, setPrimary] = React.useState('#520396');
  return (
      <div>
          {/*<ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />*/}
          <ConfigProvider
              theme={{
                  token: {
                      colorPrimary: primary,
                  },
              }}
          >

              {/*<Space>*/}
              {/*    <Input placeholder="Please Input" />*/}
              {/*    <Button type="primary">Submit</Button>*/}
              {/*</Space>*/}
              <NavBar/>
              <Routes>
                  <Route path="/set-order" element={<SetOrder/>} />
              </Routes>

          </ConfigProvider>

      </div>


  );
}

export default App;
