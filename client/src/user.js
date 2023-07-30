import { toast } from "react-hot-toast";
import { API } from "./api";

export const createAccount = async (name, model, color) => {
  try {
    await fetch(API + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        model,
        color,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "registerd");
        if (data.status === "ok") {
          toast.success("Added");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
//delete
export const deleteAccount = async (id) => {
  try {
    await fetch(API + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "registerd");
        if (data.status === "deleted") {
          toast.success("Deleted");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateAccount = async (id, name, model, color) => {
  try {
    await fetch(API + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        model,
        color,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "updated");
        if (data.status === "ok") {
          toast.success("Updated");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
