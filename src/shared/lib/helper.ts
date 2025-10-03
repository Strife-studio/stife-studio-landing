export const scrollByContainer = (containerId: string) => {
  const contentSection = document.getElementById(containerId);
  if (contentSection) {
    contentSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
