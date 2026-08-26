import {router} from "./router";
import {RouterProvider} from "react-router";
import {MantineProvider} from "@mantine/core";

const App = () => {
    return <MantineProvider>
        <RouterProvider router={router}/>
    </MantineProvider>;
};

export default App;