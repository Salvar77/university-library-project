import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import BookForm from "@/components/admin/forms/BookForm";

const page = () => {
  return (
    <div>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </div>
  );
};

export default page;
