import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Item = {
  id: number;
  level: number;
  category: string;
  title: string;
  description: string;
  youtube_link?: string;
  google_slide_link?: string;
  reference_video_link: string[]; // fix this
  tags: string[];
  importance: string;
};

type Props = {
  data: Item[];
};

const ItemTable = ({ data }: Props) => {
  return (
    <Table className="max-w-[1400px] mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-center">S. No</TableHead>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead className="w-[300px]">Description</TableHead>
          <TableHead className="w-[80px] text-center">Level</TableHead>
          <TableHead className="w-[200px]">Category</TableHead>
          <TableHead className="w-[100px] text-center">Importance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-center">{item.id}</TableCell>
            <TableCell className="break-words whitespace-normal">
              {item.title}
            </TableCell>
            <TableCell className="break-words whitespace-normal">
              {item.description}
            </TableCell>
            <TableCell className="text-center">{item.level}</TableCell>
            <TableCell className="break-words whitespace-normal">
              {item.category}
            </TableCell>
            <TableCell className="text-center">{item.importance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
