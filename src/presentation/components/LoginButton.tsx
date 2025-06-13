import { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { useLoginUser } from "../hooks/useLoginUser.hook";
import { useQueryClient } from "@tanstack/react-query";

const LoginButton = ({ setValidateSucess }: { setValidateSucess?: (validateSucess: boolean) => void }) => {
  const { mutate: loginUser, isPending } = useLoginUser();
  const queryClient = useQueryClient();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogin = () => {
    loginUser(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        if (setValidateSucess) {
          setValidateSucess(true);
          return
        }
        if (typeof window !== 'undefined') {
          window.location.href = "/";
        }
      },
      onError: (err) => {
        setErrorMsg(err.message || "Error desconocido");
        setOpenSnackbar(true);
      },
    });
  };

  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        startIcon={
          <img
            src="/images/logos/googlelogo.png"
            alt="Google"
            style={{ width: 24, height: 24 }}
          />
        }
        sx={{
          borderColor: "#ccc",
          color: "#555",
          backgroundColor: "#fff",
          textTransform: "none",
          fontWeight: 500,
          padding: "10px 0",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
        onClick={handleLogin}
        disabled={isPending}
      >
        {isPending ? "Cargando..." : "Iniciar sesión con Google"}
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginButton;
