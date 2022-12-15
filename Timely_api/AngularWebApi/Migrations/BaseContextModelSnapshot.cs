﻿// <auto-generated />
using AngularWebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AngularWebApi.Migrations
{
    [DbContext(typeof(BaseContext))]
    partial class BaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.32");

            modelBuilder.Entity("AngularWebApi.Models.Tablica_podaci", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Duration")
                        .HasColumnType("TEXT");

                    b.Property<string>("Project_name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Start_time")
                        .HasColumnType("TEXT");

                    b.Property<string>("Stop_time")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Tablica_podaci");
                });
#pragma warning restore 612, 618
        }
    }
}
