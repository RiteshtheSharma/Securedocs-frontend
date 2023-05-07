import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { Typography,Stack,Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import NotesGroup from './NotesGroup';
import { useSearchParams } from 'react-router-dom';
// import { navBarItemsContext } from '../context/NavBarItemsContext';
// import noteContext from '../context/NoteContext';
const Search = () => {
    const [value, setValue] = useState('1');
//    const {searchTerm} = useContext(navBarItemsContext);
   const [searchParams, setSearchParams] = useSearchParams();
//    const {searchNotes} = useContext(noteContext);
  // single-time read
  // usestates Titles,description & tag are for  notes fetched according search term compared with title, description or tag
//   const [Titles, setTitle] = useState([])
//   const [Descriptions, setDescription] = useState([])
//   const [Tags, setTag] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
      };
console.log(' search ')
  useEffect (()=>{async function fetchData() {
    // read the params on component load and when any changes occur
    
    // get new values on change
  
    // update the search params programmatically
    setSearchParams({ term: searchTerm, type: (parseInt(value)===1?"title":(parseInt(value)===2?"description":"tags")) });
    // const title = await searchNotes(searchTerm,"title");
    // const description =await searchNotes(searchTerm,"description");
    // const tag =await searchNotes(searchTerm,"tag");
    // setTitle(title)
    // setDescription(description)
    // setTag(tag)
  }
  fetchData()
}, [value, searchTerm,searchParams]);



  return (
    <Stack>
    <Box my={3} sx={{display:'flex',justifyContent:'center'}} width='100vw'><Typography variant='h4'>Results for query: </Typography> 
    <pre> </pre>
    <Typography variant='h4' color='primary'> {searchTerm}</Typography></Box>

    <Box sx={{ maxWidth: '100%', typography: 'body1' }} ml={2}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={`Folders(${Titles.length})`} value="1" />
            <Tab label={`Files(${Descriptions.length})`} value="2" />
            <Tab label={`Tags(${Tags.length})`} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <NotesGroup Notes={Titles} setNotes={setTitle} />
        </TabPanel>
        <TabPanel value="2">
        <NotesGroup Notes={Descriptions} setNotes={setDescription}/>
         </TabPanel>
        <TabPanel value="3"> <NotesGroup Notes={Tags} setNotes={setTag}/></TabPanel>
      </TabContext>
    </Box>


    </Stack>
  )
}


export default Search