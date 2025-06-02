export function useToast() {
  return {
    toast: (message: string) => {
      console.log("TOAST:", message); // بس مؤقتًا
    },
  };
}
