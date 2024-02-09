import { useSelector } from "react-redux"

const useAuth = () => {
  const { userEmail, userId, role, isLoggedIn } = useSelector(state => state.auth)
  return { userEmail, userId, role, isLoggedIn }
}

export default useAuth
