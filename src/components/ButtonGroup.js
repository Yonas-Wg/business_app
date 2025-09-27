import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        aria-label="play_icon"
        className="text-neutral-200 hover:bg-[#d4ba7d20] rounded-full p-2 hover:text-[#d4ba7d]"
        onClick={previous}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
      <button
        aria-label="play_icon"
        className="text-neutral-200 rotate-180 hover:bg-[#d4ba7d20] rounded-full p-2 hover:text-[#d4ba7d]"
        onClick={next}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
    </div>
  );
};

export default ButtonGroup;
