import {
  Table,
  TableBody,
  TableCaption,
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
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60px]">S. No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Importance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.level}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-right">{item.importance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
