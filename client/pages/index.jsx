import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  createAccount,
  deleteAccount,
  getAllDatas,
  updateAccount,
} from "@/src/user";
import InputFields from "@/src/components/InputFields";
import { API } from "@/src/api";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getCarsByID } from "@/src/redux/slice";
import EditInput from "@/src/components/EditInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fetchDatas, setfetchDatas] = useState([]);
  const [clicky, setclicky] = useState("");
  const Cars = useSelector((state) => state.vehicle.Cars);
  const singleCar = useSelector((state) => state.vehicle.singleCar);
  const [inputDatas, setinputDatas] = useState({
    name: "",
    model: "",
    color: "",
  });
  const { name, model, color } = inputDatas;
  console.log("name", singleCar.name); 
  const handleSubmit = () => {
    if (name !== "" && model !== "" && color !== " ") {
      createAccount(name, model, color);
      setinputDatas({
        name: "",
        model: "",
        color: "",
      });
    } else {
      toast.error("All fields are mandatory!");
    }
  };
  const dispatch = useDispatch();
  const getAllDatas = async () => {
    try {
      await fetch(API, {
        method: "GET",
        headers: {
          //fet(api,{}).then(json).then(data)
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Orgin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setfetchDatas(data.data);
          dispatch(getCars(data.data));
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllDatas();
  }, [fetchDatas]);
  // const [editedData, seteditedData] = useState();
  // const editDetails = (id) => {
  //   const edited = fetchDatas.filter((item) => (item._id = id));
  //   seteditedData(edited);
  // };

  return (
    <>
      <div className="text-[white] bg-purple-500 w-[100%] h-[100vh] flex items-center justify-between gap-2 p-2">
        <Toaster />
        <div className=" flex-col flex items-center justify-center gap-2 p-2 w-[50%]">
          {"edit" === clicky ? (
            <EditInput singleCar={singleCar} setclicky={setclicky} />
          ) : (
            <InputFields
              inputDatas={inputDatas}
              setinputDatas={setinputDatas}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
        <div className=" flex-col h-[100%] flex items-center justify-center gap-2 p-2 w-[50%]">
          <div className="container-snap flex-col h-[80%] flex items-center justify-center gap-2 overflow-y-scroll">
            {Cars.map((i) => (
              <div className="text-black font-medium  p-3 rounded-md shadow-md flex-col flex items-center justify-center gap-2 bg-[pink] w-[300px]  ">
                <h1>{i.name}</h1>
                <h1>{i.model}</h1>
                <h1>{i.color}</h1>
                <div className="flex items-center w-[100%] p-2 justify-between">
                  <button
                    className="bg-[red] text-white rounded-md shadow-md p-2"
                    onClick={() => {
                      const id = i._id;
                      console.log(id);
                      deleteAccount(id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-[gray] text-white rounded-md shadow-md p-2"
                    onClick={() => {
                      const id = i._id;
                      dispatch(getCarsByID(id));
                      setclicky("edit");
                      // editDetails(id);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
