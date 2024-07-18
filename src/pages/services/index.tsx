import { useEffect, useState } from "react";
import GlobalTable from "../../components/ui/table";
import { getDataFromCookie } from "@data-service";
import { Button, IconButton, InputBase, Pagination, Paper, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useServiceStore from "../../store/service";
import { Services } from "@modals";
import { ToastContainer } from "react-toastify";
const Index = () => {
  const { getData, data, isLoading, deleteData, totalPages } = useServiceStore();
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const [params, setParams ] = useState({
    limit: 10,
    page: 1,
    owner_id: getDataFromCookie("id"),
  });
  useEffect(() => {
    getData(params);
  }, [params, getData]);

  data?.forEach((item, index) => {
    item.index = params.page * params.limit - (params.limit - 1) + index;
  });

  const headers = [
    { title: "T/R", value: "index" },
    { title: "Xizmat nomi", value: "name" },
    { title: "Xizmat narxi", value: "price" },
    { title: "Action", value: "action" },
  ];
  const editItem =(item:any)=>{
    setModal(true)
    setItem(item)
  }
  const handleClose =()=>{
    setModal(false)
    setItem({})
  }

  const handleChange = (event, value) => {
    setParams((prev) => ({ ...prev, page: value }));
  };

  
  return (
    <>
      <ToastContainer />
      {modal && <Services open={modal} handleClose={handleClose} item={item}/>}
      <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal(true)}
        >
          xizmat qo'shish
        </Button>
      </div>
      <GlobalTable headers={headers} body={data} isLoading={isLoading} deleteItem={deleteData} editItem={editItem}/>
      <Stack spacing={2}>
        <Pagination count={totalPages} page={params.page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default Index;
