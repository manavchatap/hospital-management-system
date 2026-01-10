const KEY = "hms_role";

export function getRole() {
  return localStorage.getItem(KEY); // "patient" | "doctor" | "admin" | null
}

export function loginAs(role) {
  localStorage.setItem(KEY, role);
}

export function logout() {
  localStorage.removeItem(KEY);
}
