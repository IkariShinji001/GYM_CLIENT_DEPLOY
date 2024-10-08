export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatDateDDMMYYY = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
  const day = date.getDate().toString().padStart(2, "0");

  return `${day}-${month}-${year}`;
};
