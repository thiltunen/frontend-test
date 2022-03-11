import { FC, useEffect, useState, useContext } from "react";
import cn from "classnames";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { ProjectsContext } from "contexts/ProjectsContext";
import styles from "./styles.module.scss";

const ControlPanel: FC = () => {
  const { sortByRating, sortByDate } = useContext(ProjectsContext);
  const [sortBy, setSortBy] = useState("");
  const [sortAscending, setSortAscending] = useState(false);

  useEffect(() => {
    if (sortBy === "rating") sortByRating(sortAscending);
    if (sortBy === "date") sortByDate(sortAscending);
  }, [sortBy, sortAscending]);

  return (
    <div className={styles.controlPanel}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        className={styles.addBtn}
      >
        Add new project
      </Button>

      <FormControl className={styles.sorting}>
        <InputLabel id="sort-by-helper-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-helper-label"
          value={sortBy}
          label="Sort By"
          onChange={(event) => setSortBy(event.target.value)}
        >
          <MenuItem color="primary" value={"rating"}>
            Rating
          </MenuItem>
          <MenuItem color="primary" value={"date"}>
            Date
          </MenuItem>
        </Select>
      </FormControl>

      <ArrowDownwardIcon
        color="primary"
        className={cn(styles.sortIcon, { [styles.sortIconAsc]: sortAscending })}
        onClick={() => setSortAscending(!sortAscending)}
      />
    </div>
  );
};

export default ControlPanel;
