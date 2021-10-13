import Swal from "sweetalert2";




// When Login is Successful.
export const alertSuccessLogin = (msg:any) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Login Successfully!",
    text: msg,
    showConfirmButton: false,
    timer: 1800,
  });
};


// When Login is Failure.
export const alertErrorLogin = (msg:any) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Something went wrong",
    text: msg,
    confirmButtonText: "Try Again",
  });
};


// When Logging Out.
export const alertLogout = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Logging Out Successfully!",
    showConfirmButton: false,
    timer: 1800,
  });
};


// When Sign-Up is Successful.
export const alertSuccessSignUp = (msg:any) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sign-Up Successfully!",
    text: msg,
    showConfirmButton: false,
    timer: 1800,
  });
};


// When Sign-Up is Failed.
export const alertErrorSignUp = (msg:any) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Something went wrong",
    text: msg,
    confirmButtonText: "Try Again",
  });
};


// Catch Error.
export const alertError = (msg:any) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Something went wrong",
    text: msg,
    confirmButtonText: "Try Again",
  });
};
