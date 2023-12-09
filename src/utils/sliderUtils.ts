export const prevSlide = (
  currentSlide: number,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
  totalSlides: number,
  setDirection?: React.Dispatch<React.SetStateAction<number>>
) => {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  setCurrentSlide(prevIndex);
  if (setDirection) {
    setDirection(-1)
  }
};

export const nextSlide = (
  currentSlide: number,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
  totalSlides: number,
  setDirection?: React.Dispatch<React.SetStateAction<number>>
) => {
  const nextIndex = (currentSlide + 1) % totalSlides;
  setCurrentSlide(nextIndex);
  if (setDirection) {
    setDirection(1)
  }
};


export function goToSlide(slideIndex: number, setCurrentSlide: React.Dispatch<React.SetStateAction<number>>) {
  setCurrentSlide(slideIndex)
  return slideIndex
}
