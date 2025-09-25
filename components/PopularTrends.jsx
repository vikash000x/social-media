"use client";

import React from "react";
import css from "@/styles/PopularTrends.module.css";
import { Alert, Avatar, Flex, Typography } from "antd";
import Iconify from "./Iconify";
import { getPopularTrends } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";

const PopularTrends = () => {
  // ✅ useQuery handles fetching
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trends"],
    queryFn: getPopularTrends,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
  console.log("trends data", data);

  if (isLoading) {
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <Typography>Loading popular trends...</Typography>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <Alert
        message="Error"
        description="Unable to fetch popular trends"
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className={css.wrapper}>
      <div className={css.bg} />
      <div className={css.container}>
        {/* head */}
        <Flex vertical>
          <Typography className="typoSubtitle2">TOP TRENDING</Typography>
          <Typography className="typoH4">#Popular Trends</Typography>
        </Flex>

        <Flex vertical gap={15}>
          {data?.data?.map((trend, i) => (
            <Flex key={i} gap={"1rem"} align="center">
              {/* trend icon */}
              <Avatar
                style={{ background: "#FF990047" }}
                icon={
                  <Iconify
                    icon="mingcute:hashtag-fill"
                    color="var(--primary)"
                    width="18px"
                  />
                }
              />
              {/* trend info */}
              <Flex vertical>
                <Typography
                  className="typoSubtitle1"
                  style={{ fontWeight: "bold" }}
                >
                  {trend.name}
                </Typography>
                <Typography
                  className="typoCaption"
                  style={{ fontWeight: "bold", color: "gray" }}
                >
                  {trend?._count?.name} Posts
                </Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default PopularTrends;
